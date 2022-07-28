import React from 'react'
import { Wrapper } from './style'
import { useState, useEffect } from 'react'
function Modal(props) {
    const [visible, setVisible] = useState(false)
    const { visible: show} = props
    const { onClose, onConfirm } = props
    useEffect(() => {
        // 这里的show 是父组件传过来的
        setVisible(show)
    }, [show])
    // const closeModal = () => {
    //     setVisible(false)
    //     onClose && onClose()
    // }
    // const confirm = () => {
    //     setVisible(false)
    //     onConfirm && onConfirm()
    // }
    // 这是属于遮罩层 点击它也会关闭模态框
    const maskClick = () => {
        setVisible(false)
        onClose && onClose()
    }
    return (
        visible &&
        <Wrapper>
            <div className="modal-filter" style={{ top: "87.616px" }}>
                <div className="modal-mask" onClick={maskClick}>
                </div>
                <div className="modal-wrapper">
                    <div className="modal-content">
                        <div className="modal-sort">
                            <div className="sort-wrapper">
                                <div className="sort-item active-sort">综合排序</div>
                                <div className="sort-item">销量优先</div>
                                <div className="sort-item">距离优先</div>
                                <div className="sort-item">速度优先</div>
                                <div className="sort-item">评分优先</div>
                                <div className="sort-item">起送价最低</div>
                                <div className="sort-item">配送费最低</div>
                                <div className="sort-item">人均高到低</div>
                                <div className="sort-item">人均低到高</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Modal