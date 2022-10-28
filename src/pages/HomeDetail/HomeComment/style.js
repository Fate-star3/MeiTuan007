import styled from 'styled-components'
// css in js 

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`
export const Wrapper = styled.div`

    .rating {
    background-color: #FFF;
    width: 100%;
    display: flex;
    margin-bottom: 0.454rem;
    padding: 0.686rem 0;
}

.rating-left {
    padding: 0 6%;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 2.27rem;
    width: 2.2rem;
}

.rating-left-hd {
    font-size: 1.227rem;
    height: 1.36rem;
    line-height: 1.36rem;
    color: #999;
    text-align: center;
    margin-bottom: 0.045rem;
    font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
    color: #FFB000;
}
.rating-left-bd {
    text-align: center;
    font-size: 0.545rem;
    color: #999;
}
.rating-md:nth-child(2) {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-left: 0;
    position: relative;
}
.rating-md {
    padding: 0 6%;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 2.27rem;
    width: 2.2rem;
}
.rating-md-main:first-child {
    margin: 0.136rem 0 0.41rem;
}
.rating-md-main {
    white-space: nowrap;
    min-height: 0.727rem;
}
.rating-md-main-desc {
    font-size: 0.6rem;
    margin-right: 0.686rem;
    color: #666;
    vertical-align: bottom;
    line-height: 0.772rem;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-foot {
    margin-right: 0.454rem;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-pic {
    display: inline-block;
    height: 0.545rem;
}
.rating-md-main-pic img {
    height: 0.5rem;
    width: 0.5rem;
}
.rating-md-main-score {
    font-size: 0.636rem;
    color: #FFB000;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main {
    white-space: nowrap;
    min-height: 0.727rem;
}
.rating-md-main-desc {
    font-size: 0.6rem;
    margin-right: 0.686rem;
    color: #666;
    vertical-align: bottom;
    line-height: 0.772rem;
}

.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-foot {
    margin-right: 0.454rem;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-pic {
    display: inline-block;
    height: 0.545rem;
}
.rating-md-main-pic img {
    height: 0.5rem;
    width: 0.5rem;
}
.rating-md-main-score {
    font-size: 0.636rem;
    color: #FFB000;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-footer:nth-child(2):after {
    height: 2.27rem;
    width: 0.045rem;
    left: auto;
    right: 0;
    -webkit-transform: scale(0.5, 1);
    transform: scale(0.5, 1);
}
.rating-footer:nth-child(2):after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: 0;
    height: 0.045rem;
    background-color: #e4e4e4;
    -webkit-transform: scale(1, 0.5);
    transform: scale(1, 0.5);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
}
.rating-footer {
    padding: 0 6%;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 2.27rem;
    width: 2.2rem;
}
.rating-footer-score {
    font-size: 1.227rem;
    height: 1.36rem;
    line-height: 1.36rem;
    color: #999;
    text-align: center;
    margin-bottom: 0.045rem;
    font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
}
.rating-footer-desc {
    text-align: center;
    font-size: 0.545rem;
    color: #999;
}



 .item {
    display: inline-block;
    height: 1.227rem;
    line-height: 1.227rem;
    padding: 0 0.454rem;
    font-size: 0.545rem;
    background: #F4F4F4;
    margin-right: 0.27rem;
    margin-bottom: 0.27rem;
    border-radius: 0.136rem;
    color: #999999;
    padding: 0 1rem;
}
 .comment-item {
    padding: 0.727rem 0.727rem 0.727rem 0;
    border-bottom: 0.045rem solid #F4F4F4;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
}
 .comment-header {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 1.6rem;
    flex: 0 0 1.6rem;
    margin-right: 0.5rem;
}
 .comment-item .comment-header img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
}
 .comment-item .comment-main{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
 .comment-item .comment-main .user {
    width: 50%;
    float: left;
    font-size: 0.5rem;
    color: #333333;
}
 .comment-item .comment-main .time {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 0.41rem;
    color: #666666;
}
.comment-item .comment-main .star-wrapper {
    float: left;
    margin-top: 0.545rem;
    margin-bottom: 0.686rem;
    width: 100%;
}
.comment-item .comment-main .star-wrapper .text {
    color: #999999;
    font-size: 0.5rem;
    float: left;
}
.comment-item .comment-main .star-wrapper .star {
    float: left;
    margin-left: 7px;
}
.star .on {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIxRTIyNkM2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUxNkE4RkU2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MjFFMjI2QTZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MjFFMjI2QjZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqgV8k8AAAEtSURBVHjaYvw/k4EY4AjE/4H4AIZM2n8ULgsDcSAHSh8gpJAYA+WA2B+J/QifYiYiDMwCYmYoziSkmJCBHECcjMRPgYqRbWAkEIsg8UWgYkSFIQtUgxgQi0PZxVj0lADxDyB+A8QvGWYxvgKz0/7/AUkyApNNN5BOBGJhBsrAWyCeD/JyBRCvYqAcgMyoAHnzLzQm7wNxF5mGlQG93I0eKSCBMGj4EAt+gPVADcMWy6uB2AUaHsSEmQvQsNWEks1RID5FhIGnoGoJpkOQmBURBlpi04/NQG0g5ifCQAGoWoIG2qDxQeXTHCj+jyZnTaqB56FeS4ViEPsCkrwtsQZ+hJaBpkB8EkkOxDaByn0ixoVSQHwQiNWBeCo00aODv1A5NSA+BMzL0siSAAEGAFbSPvm9m4DCAAAAAElFTkSuQmCC');
}
.star .star-item {
    display: inline-block;
    width: 0.454rem;
    height: 0.454rem;
    margin-right: 0.136rem;
    background-repeat: no-repeat;
    background-size: 0.454rem 0.454rem;
}
 .content{
    /* padding: 0.727rem; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width: 100%;

}
.content img {
    width: 100px;
    padding-top: 0.454rem;
}

`