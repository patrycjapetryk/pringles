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
  const uuid = formData.get('uuid') as string;
  const fileBuffer = await file.arrayBuffer();
  const mime = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

  // await new Promise((resolve, reject) => {
  //   cloudinary.uploader
  //     .upload_stream(
  //       {
  //         tags: ['server-test'],
  //         public_id: uuid,
  //       },
  //       function (error, result) {
  //         if (error) {
  //           reject(error);
  //           return;
  //         }
  //         resolve(result);
  //       },
  //     )
  //     .end(fileUri);
  // });

  await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        tags: ['server-test'],
        public_id: uuid,
      })
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

  revalidatePath('/');
}
