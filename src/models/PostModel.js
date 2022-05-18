export class ContentType {
  static PARAGRAPH = 'paragraph';
  static QUOTE = 'blockquote';
  static HORIZONTAL_RULE = 'hr';
  static IMAGE = 'embedded-asset-block';
}

export default class PostModel {
  constructor(data) {
    const fields = data.fields;
    this.title = fields.title;
    this.date = fields.date;
    this.tags = fields.tags; // Array
    this.image = fields.image
      ? {
          url: fields.image.fields.file.url,
          alt: fields.image.fields.title
        }
      : null;

    this.body = fields.body.content.map((entry) => {
      const type = entry.nodeType;
      let value = null;
      switch (entry.nodeType) {
        case ContentType.PARAGRAPH:
          value = entry.content[0].value;
          break;
        case ContentType.QUOTE:
          value = entry.content[0].content.value;
          break;
        case ContentType.IMAGE:
          value = {
            url: entry.data.target.fields.file.url,
            alt: entry.data.target.fields.title
          };
          break;
        case ContentType.HORIZONTAL_RULE:
          break;
        default:
          break;
      }

      return {
        type: entry.nodeType,
        value: value
      };
    });
  }
}
