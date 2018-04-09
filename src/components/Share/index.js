import React, {Component} from "react";
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    RedditShareButton,
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    GooglePlusIcon,
    LinkedinIcon,
    RedditIcon
} from "react-share";
import config from "../../../meta/config";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  margin: 15px 0
  text-align: center
`

class Share extends Component {
    render() {
        const {title, slug, excerpt, mobile} = this.props;
        const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
        const url = config.siteUrl + realPrefix + slug;

        const iconSize = mobile ? 36 : 48;
        const filter = count => (count > 0 ? count : "");

        return (
            <Wrapper className="social-links">
                <RedditShareButton url={url} title={title}>
                    <RedditIcon round size={iconSize}/>
                    <RedditShareCount url={url}>
                        {count => <div className="share-count">{filter(count)}</div>}
                    </RedditShareCount>
                </RedditShareButton>
                <TwitterShareButton url={url} title={title}>
                    <TwitterIcon round size={iconSize}/>
                </TwitterShareButton>
                <GooglePlusShareButton url={url}>
                    <GooglePlusIcon round size={iconSize}/>
                    <GooglePlusShareCount url={url}>
                        {count => <div className="share-count">{filter(count)}</div>}
                    </GooglePlusShareCount>
                </GooglePlusShareButton>
                <FacebookShareButton url={url} quote={excerpt}>
                    <FacebookIcon round size={iconSize}/>
                    <FacebookShareCount url={url}>
                        {count => <div className="share-count">{filter(count)}</div>}
                    </FacebookShareCount>
                </FacebookShareButton>
                <LinkedinShareButton
                    url={url}
                    title={title}
                    description={excerpt}
                >
                    <LinkedinIcon round size={iconSize}/>
                    <LinkedinShareCount url={url}>
                        {count => <div className="share-count">{filter(count)}</div>}
                    </LinkedinShareCount>
                </LinkedinShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon round size={iconSize}/>
                </TelegramShareButton>
            </Wrapper>
        );
    }
}

export default Share;
