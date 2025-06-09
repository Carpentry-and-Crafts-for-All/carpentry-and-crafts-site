export const onRequest = async (context) => {
  const { request } = context;
  const url = new URL(request.url);

  // Only redirect from root URL (e.g., https://yoursite.com/)
  if (url.pathname === '/' || url.pathname === '') {
    const acceptLang = request.headers.get('accept-language') || '';
    const isWelsh = acceptLang.toLowerCase().startsWith('cy');

    return Response.redirect(`${url.origin}${isWelsh ? '/cy/' : '/en/'}`, 302);
  }

  // Continue as normal
  return context.next();
};
