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
    this.slug = fields.slug;
    this.date = new Date(fields.date).toLocaleDateString();
    this.tags = fields.tags; // Array of strings
    this.image = fields.image
      ? {
          url: fields.image.fields.file.url,
          alt: fields.image.fields.title
        }
      : null;

    this.body = fields.body.content.map((entry) => {
      const type = entry.nodeType;
      let value = null;
      switch (type) {
        case ContentType.PARAGRAPH:
          value = entry.content.map((node) => {
            return {
              mark: node.marks.length > 0 && node.marks[0].type,
              text: node.value
            };
          });
          break;
        case ContentType.QUOTE:
          value = entry.content[0].content.map((node) => {
            return {
              mark: node.marks.length > 0 && node.marks[0].type,
              text: node.value
            };
          });
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
        type: type,
        value: value
      };
    });
  }
}
