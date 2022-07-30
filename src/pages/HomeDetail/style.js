import styled from 'styled-components'
export const Wrapper = styled.div`

    z-index: 1;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    touch-action: pan-y;
    background-color: #fff;
   .order-container {
    z-index: 2;
    -webkit-transform: translateZ(2px);
    transform: translateZ(2px);
    position: relative;
    touch-action: none;
}

.order-container {
    z-index: 2;
    -webkit-transform: translateZ(2px);
    transform: translateZ(2px);
    position: relative;
    touch-action: none;

}

* {
    touch-action: pan-y;
}

.order-container-back {
    height: 50px;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    position: relative;
    z-index: 5;
}

.order-container-back .order-container-backIcon {
    width: 40px;
    height: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAAEVsH/dAAAABGdBTUEAALGPC/xhBQAAAMJJREFUKBXFkrEOwjAMRFMkFujKB1Ti+5GYGahA/AMDS6X+AywovEu5BApCMGHpYvt8dtMkIcZYBRvJJbBsTIw9tT5zJDEnKYBoM0Oyq1hqmIWmNtasSMqY3EBAoX0pQtRA1khRErdCThzbi7hSWJpIHmIGZN8X5kNDnOZREHvQ/UBISssxtziA3IITeN6SBfYItHcdkKwH/2zg87qJA5CdQTkg7RlCAh2UrAPDE3j4oc+C+5R16n83wZPsEZbXbHLkbwE+Cry82MV2AAAAAElFTkSuQmCC) no-repeat;
    background-size: 2vw 4vw;
    background-position: bottom 3.6vw right 4.26666667vw;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.order-container-bg:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    -webkit-filter: blur(3px);
    filter: blur(3px);
}

.order-container-pic {
    position: absolute;
    right: 16px;
    top: 8px;
    width: 30px;
    height: 30px;
    z-index: 9;
}

.order-container-pic .order-container-picv2 {
    width: 30px;
    height: 30px;
}

.order-content {
    margin-top: -8.4vw;
    min-height: 10.66666667vw;
}

.order-contentv2 {
    position: relative;
    width: 100%;
    padding: 3.33333333vw 4.26666667vw;
    box-sizing: border-box;
    background: white;
    border-radius: 3.2vw 3.2vw 0 0;
}

.order-content-pic {
    position: absolute;
    right: 4.26666667vw;
    top: -1.6vw;
    width: 17.33333333vw;
    height: 17.33333333vw;
    border-radius: 1.6vw;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0.26666667vw 0.26666667vw 1.33333333vw 0 rgb(0 0 0 / 5%);
}

.order-content-txt>div {
    margin-bottom: 1.06666667vw;
}

.order-content-txt .order-content-storeName {
    width: 67.73333333vw;
    font-weight: 600;
    font-size: 5.86666667vw;
    color: #222426;
    line-height: 8.26666667vw;
}

.order-content-storeNamev2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.order-content-txt .order-content-desc {
    height: 4.8vw;
    display: flex;
    align-items: center;
    width: 67.73333333vw;
}

.order-content-txt .order-content-desc .content-desc-comment {
    font-weight: 500;
    font-size: 3.2vw;
    color: #FF8000;
    display: inline-flex;
    align-items: center;
}

.order-content-txt .order-content-desc>span {
    margin-right: 2.13333333vw;
}

.order-content-txt .order-content-desc .content-desc-comment:before {
    content: '';
    margin-right: 0.8vw;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADKQTcFAAACqUlEQVRIDcVWv2vVUBT+bqwKWgfByYIuglpFoVYUtPXH2C4OIqhDJ/UfcGrr0/e0RbD/gJuDLgUVhIo6iSJ0EEFRUOji4mTH+quvuX7nvCS8JDev76aBXkhyc853vu+cm9zkAOs0TBldaxGggVGNrWHOGIS+PIFvgOLrqMPimR4N3CrD4V2xbeAw6/tAsTjpkLMBU8NHnwTi4O5jQtTaRCUuYOU3uidoIb0qtlM4iCY+USgdZ2jpwSEzgc/dJuBX8TIry4qKktiamOxWVHDpzDtE2js4TvJ3hBQlG7LqE2YS8x1oElcRSQKQCZd4ACt4wmknfCAYxaai3TfOiu19bMFP7CHRPi7jCI/LDO9xU+SsTa7jIx7PsQFfsQML5hp+ZVEqbGfoXsKYihjsJWinPrcsusy9vHjAD56/aTIb8cCMY7FVxRJe0HFEeQVW5Wi9jH2k7KPGWSzjIueD8TPrr1JrFS7VioVnVgFX57a4J2Qt4WF+8g2eVsdewCQap3A7ETZnuEOHcYGG2YKQKsyzoqFaZIuXGmroxyXdClXIpDkegtyxqLhy+1j/tXU8pu9cOrbknSxvDeez/+yk4phWAb24wpR+x7bSV+HYiqtZUeHLCYvRXOd3C3gl8zUNi5cRV47GKRyhFnJof0MhR7GwxXZ/nUyEKeYoFjY4kKHxv7XFHE5hvtnyaV+7MJNXLkfKTmHcxW5iex14P5PFNkxhlyvI/Y/9h/0usNpkLSzecv4+wgxyfYZoy30T1C//dOB7hE0ubmFgU4JonxjMkX7C3Ey3stryWkwTOtIOj+ZOLrdwwG4xxF9WsTkKfsMdP87eWXqu3Ih66lH2ZSfZtUwzbigC/WEJX3IBNLiXhw5WcZSXY2xfXvu0rSKibfAKTjPZeTZ/8SMR1/qP/w/unKSA9/BmAAAAAElFTkSuQmCC);
    width: 2.4vw;
    height: 2.4vw;
    background-size: 2.4vw 2.4vw;
}

.order-content-txt .order-content-desc>span {
    margin-right: 2.13333333vw;
    font-size: 2.66666667vw;
}

.order-content-txt>div:last-child {
    margin-bottom: 2.13333333vw;
}

.order-content-txt .content-hot {
    height: 4.53333333vw;
    display: flex;
    align-items: center;
}

.order-content-txt>div {
    margin-bottom: 1.06666667vw;
}

.order-content-txt .content-hot>span {
    height: 4.53333333vw;
    align-items: center;
    padding: 0 1.06666667vw;
    background: #F5F5F6;
    border-radius: 1.06666667vw;
    font-size: 2.93333333vw;
    color: #222426;
    margin-right: 2.13333333vw;
}

.content-bd {
    position: relative;
}

.content-bdv2.content-bdv3>div:last-child {
    margin-bottom: 2.13333333vw;
}

.content-bdv2.content-bdv3>div {
    margin-bottom: 1.06666667vw;
}

.content-bdv2 .content-bd-left,
.content-bdv2 .content-bd-left * {
    touch-action: pan-x;
}

.content-bdv2 .content-bd-left {
    /* overflow-x: scroll; */
    white-space: nowrap;
    width: 100%;
   


}

.bd-left {
    height: 5.6vw;
    background: #FF473D;
    color: #FFFFFF;
    border-radius: 0.53333333vw;
    margin-right: 1.06666667vw;
    display: inline-block;
}

.bd-box {
    padding: 0 1.6vw 0 2.66666667vw;
    height: 100%;
    border-right: 1px dashed #FFFFFF;
    box-sizing: border-box;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
}

.bd-box>.bd-box-icon {
    font-size: 3.2vw;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    color: #fff !important;;
}

.bd-box>.bd-box-number {
    font-weight: 500;
    font-size: 3.73333333vw;
    margin-left: 0.53333333vw;
    color: #fff !important;;
}

.bd-box-txt {
    padding: 0 2.13333333vw 0 2vw;
    height: 100%;
    font-size: 2.66666667vw;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    color: #fff !important;;
}

.bd-box {
    padding: 0 1.6vw 0 2.66666667vw;
    height: 100%;
    border-right: 1px dashed #FFFFFF;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
}




.order-content-ft {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order-content-ft .ft-adv2 {
    height: 3.73333333vw;
    margin-top: 0;
    max-width: 88vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.order-content-ft .ft-ad {
    font-size: 2.93333333vw;
    color: #858687;
}

.order-content-ft .ft-last {
    display: inline-block;
    background-image: url("https://p0.meituan.net/openhfiveimages/ea475a63c516941e059619d052724d01746.png");
    width: 2.4vw;
    height: 2.4vw;
    margin-left: 0.8vw;
    background-size: 2.4vw 2.4vw;
}

.content-bd>.ft-last-v2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.15s;
    pointer-events: none;
    background: white;
}
 `