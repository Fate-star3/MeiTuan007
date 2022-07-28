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
    margin-bottom: 10px;
    padding: 15px 0;
}

.rating-left {
    padding: 0 6%;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 50px;
    width: 48px;
}

.rating-left-hd {
    font-size: 27px;
    height: 30px;
    line-height: 30px;
    color: #999;
    text-align: center;
    margin-bottom: 1px;
    font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
    color: #FFB000;
}
.rating-left-bd {
    text-align: center;
    font-size: 12px;
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
    height: 50px;
    width: 48px;
}
.rating-md-main:first-child {
    margin: 3px 0 9px;
}
.rating-md-main {
    white-space: nowrap;
    min-height: 16px;
}
.rating-md-main-desc {
    font-size: 13px;
    margin-right: 15px;
    color: #666;
    vertical-align: bottom;
    line-height: 17px;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-foot {
    margin-right: 10px;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-pic {
    display: inline-block;
    height: 12px;
}
.rating-md-main-pic img {
    height: 11px;
    width: 11px;
}
.rating-md-main-score {
    font-size: 14px;
    color: #FFB000;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main {
    white-space: nowrap;
    min-height: 16px;
}
.rating-md-main-desc {
    font-size: 13px;
    margin-right: 15px;
    color: #666;
    vertical-align: bottom;
    line-height: 17px;
}

.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-foot {
    margin-right: 10px;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-md-main-pic {
    display: inline-block;
    height: 12px;
}
.rating-md-main-pic img {
    height: 11px;
    width: 11px;
}
.rating-md-main-score {
    font-size: 14px;
    color: #FFB000;
}
.rating-md-main-desc, .rating-md-main-foot, .rating-md-main-score {
    display: inline-block;
    vertical-align: middle;
}
.rating-footer:nth-child(2):after {
    height: 50px;
    width: 1px;
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
    height: 1px;
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
    height: 50px;
    width: 48px;
}
.rating-footer-score {
    font-size: 27px;
    height: 30px;
    line-height: 30px;
    color: #999;
    text-align: center;
    margin-bottom: 1px;
    font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;
}
.rating-footer-desc {
    text-align: center;
    font-size: 12px;
    color: #999;
}



 .item {
    display: inline-block;
    height: 27px;
    line-height: 27px;
    padding: 0 10px;
    font-size: 12px;
    background: #F4F4F4;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 3px;
    color: #999999;
    padding: 0 1rem;
}
 .comment-item {
    padding: 16px 16px 16px 0;
    border-bottom: 1px solid #F4F4F4;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
 .comment-header {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 35px;
    flex: 0 0 35px;
    margin-right: 11px;
}
 .comment-item .comment-header img {
    width: 35px;
    height: 35px;
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
    font-size: 11px;
    color: #333333;
}
 .comment-item .comment-main .time {
    width: 50%;
    float: right;
    text-align: right;
    font-size: 9px;
    color: #666666;
}
.comment-item .comment-main .star-wrapper {
    float: left;
    margin-top: 12px;
    margin-bottom: 15px;
    width: 100%;
}
.comment-item .comment-main .star-wrapper .text {
    color: #999999;
    font-size: 11px;
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
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-repeat: no-repeat;
    background-size: 10px 10px;
}
 .content{
    /* padding: 16px; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width: 100%;

}
.content img {
    width: 100px;
    padding-top: 10px;
}

`