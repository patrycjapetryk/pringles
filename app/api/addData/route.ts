import { google } from 'googleapis';
import moment from 'moment-timezone';

const scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets',
];

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes,
});

const sheets = google.sheets({
  auth,
  version: 'v4',
});

export async function POST(request: Request) {
  const {
    uuid,
    name,
    surname,
    birthYear,
    phone,
    email,
    street,
    apartament,
    postalCode,
    city,
    message,
  } = await request.json();

  const imageURL = `https://res.cloudinary.com/zzzp/image/upload/${uuid}`;
  const dateTime = moment().tz('Poland').format('YYYY-MM-DD HH:mm');

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:L1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            uuid,
            dateTime,
            name,
            surname,
            birthYear,
            phone,
            email,
            street,
            apartament,
            postalCode,
            city,
            imageURL,
            message,
          ],
        ],
      },
    });

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
    );
  }
}
