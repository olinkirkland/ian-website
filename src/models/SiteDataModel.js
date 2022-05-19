export default class SiteDataModel {
  constructor(data) {
    const fields = data.fields;
    this.logo = fields.logo
      ? {
          url: fields.logo.fields.file.url,
          alt: fields.logo.fields.title
        }
      : null;
    this.illustration = fields.illustration
      ? {
          url: fields.illustration.fields.file.url,
          alt: fields.illustration.fields.title
        }
      : null;
  }
}
