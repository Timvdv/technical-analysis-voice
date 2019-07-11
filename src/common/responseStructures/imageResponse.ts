import { BasicResponse } from "./basicResponse";

/**
 * Class that holds information for creating card responses.
 */
export class ImageResponse {

  public introductoryPrompt: BasicResponse;
  public title: string;
  public imageUrl: string;
  public altText: string;

  /**
   * Constructor
   * @param introductoryPrompt intro prompt for image
   * @param title Image title
   * @param imageUrl Url to image source
   * @param altText alt text
   */
  constructor(introductoryPrompt: BasicResponse, title: string, imageUrl: string, altText: string) {
    this.introductoryPrompt = introductoryPrompt;
    this.title = title;
    this.imageUrl = imageUrl;
    this.altText = altText;
  };
};