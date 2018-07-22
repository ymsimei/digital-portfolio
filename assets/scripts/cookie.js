
if (Cookies.get('user') == null) {
  Cookies.set('user', 'retunring', { expires: 7 });
} else {
  console.log('retunring user')
}
