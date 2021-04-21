import React from 'react';

const Popover = (props) => {
    const { open, close } = props;
    const onSubmit = () => {
        console.log('submit')
    }
    return(
        <>
            {open ? (
                <div className="popover-wrapper">
                    <div className="popover-wrapper-container">
                        <div className="color-picker">
                            <div />
                        </div>
                        <input placeholder="제목을 입력하세요"/>
                        <textarea />
                        <div className="button-group">
                            <button onClick={close}>
                                취소
                            </button>
                            <button onClick={onSubmit}>
                                확인
                            </button>
                        </div>
                    </div>
                </div>
                ) : null
            }
        </>
    )
}

export default Popover