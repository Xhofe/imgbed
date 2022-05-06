import ImgApi from "../img_api";

const api: ImgApi = {
  name: 'tuchuangs',
  transit: false,
  url: 'https://file.runrab.com/api/public/path',
  field_name: 'file',
  resp_type: 'json',
  url_field: ['url'],
  code_field: ['code'],
  success_code: 200,
  max_size: 0,
  extensions: [],
}

export default api
