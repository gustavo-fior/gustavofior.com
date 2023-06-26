import type { NextApiRequest, NextApiResponse } from 'next';
import { getPostsMetadata, type PostMetadata } from '../../utils/metadata/metadataUtils';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostMetadata[]>
) {
  const postsMetadata = getPostsMetadata();
  res.status(200).json(postsMetadata);
}
