export type CookieTypes = "user" | "currentUser" | "loggedIn";

export function getFromCookie(item: CookieTypes) {
  const name = item + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

export function addToCookie(
  item: CookieTypes,
  data: any,
  expiryDays: number = 7
) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expiryDays);
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = `${item}=${data};${expires};path=/`;
}
