import { leanCloudAppId, leanCloudAppKey } from '../../../utils/constants';
/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next';
import { isEmptyArray } from '../../../utils/verify';

const AV = require('leancloud-storage');

AV.init({
  leanCloudAppId,
  leanCloudAppKey
});

async function initLikeClassItem(slug) {
  const Item = AV.Object.extend('Like');
  const item = new Item();
  item.set('slug', slug);
  item.set('num', 0);
  await item.save();
  return item;
}

async function queryLikeByKey(key, value) {
  const query = new AV.Query('Like');
  query.equalTo(key, value);
  const result = await query.find();
  if (!isEmptyArray(result)) {
    return result[0];
  }

  const initItem = await initLikeClassItem(value);
  return initItem;
}

async function updateLike(id, num) {
  const item = AV.Object.createWithoutData('Like', id);
  item.set('num', num + 1);
  await item.save();
  return item.attributes.num;
}

// TODO: 待提高代码健壮性
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const slug = req.query?.slug;
    const result = await queryLikeByKey('slug', slug);
    const { num } = result.attributes;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ num }));
  }

  if (req.method === 'PATCH') {
    const { slug } = JSON.parse(req.body);
    const result = await queryLikeByKey('slug', slug);

    const {
      attributes: { num },
      id
    } = result;

    const likeNum = await updateLike(id, num);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ num: likeNum }));
  }
};
