export const updateemail = email => ({
  type: "ON_CHANGE_EMAIL",
  data: email
});
export const updatefirstnamne = firstname => ({
  type: "ON_CHANGE_FIRSTNAME",
  data: firstname
});
export const updatelastname = lastname => ({
  type: "ON_CHANGE_LASTNAME",
  data: lastname
});
export const updatepassword = password => ({
  type: "ON_CHANGE_PASSWORD",
  data: password
});
export const updatenumber = number => ({
  type: "ON_CHANGE_NUMBER",
  data: number
});
export const updateimage = uri => ({
  type: "ON_UPLOAD_IMAGE",
  data: uri
});

export const onsubmit = data => ({
  type: "ON_SUBMIT",
  data: data
});
