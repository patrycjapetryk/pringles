import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: Request) {
  const {
    name,
    surname,
    email,
    message,
    uuid,
    birthYear,
    phone,
    street,
    apartament,
    postalCode,
    city,
  } = await request.json();

  if (!email) new Response(JSON.stringify({ error: 'Email is required' }));

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          LNAME: surname,
          MESSAGE: message,
          PHONE: phone,
          ADDRESSPL: `${street} ${apartament || ''} ${postalCode} ${city}`,
          BIRTHYEAR: birthYear,
          UUID: uuid,
        },
      },
    );

    return new Response(JSON.stringify({ res }));
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
    );
  }
}
