import styled from "@emotion/styled";
import media from "./util/mediaQuery";

console.log("index");
const IndexStyle = styled("div")`
  ${media.desktop} {
    width: 1080px;
    margin: 0 auto;
  }
  ${media.mobile} {
    padding: 0 20px;
  }
`;
export default IndexStyle;
