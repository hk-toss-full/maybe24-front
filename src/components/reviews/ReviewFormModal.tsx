
interface ModalProps{
  isOpen: boolean;
  onClose: () => void;
}

const ReviewFormModal: React.FC<ModalProps> = ({isOpen, onClose}) => {

  if(!isOpen) return null;

  return(
    <div>
      <h1>상품명</h1>
      <hr />
      <h2>별점</h2>
      <div>
        <span data-value="1">★</span>
        <span data-value="2">★</span>
        <span data-value="3">★</span>
        <span data-value="4">★</span>
        <span data-value="5">★</span>
    </div>
      <h2>관람후기</h2>
      <textarea></textarea>
      <button onClick={onClose}>취소</button>
      <button>등록</button>
    </div>
  )
}

export default ReviewFormModal;