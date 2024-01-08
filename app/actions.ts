'use server';

import { revalidatePath } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function createFile(formData: FormData) {
  const file = formData.get('billImage') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ['nextjs-server-actions-upload-sneakers'],
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        },
      )
      .end(buffer);
  });
  revalidatePath('/');
}
