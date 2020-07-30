declare module "*.jpg"
declare module "*.png"

declare namespace JSX {
  interface AmpImg {
    alt?: string
    src?: string
    width?: any
    height?: any
    layout?: string
    key?: any
  }

  interface IntrinsicElements {
    "amp-img": AmpImg
  }
}
