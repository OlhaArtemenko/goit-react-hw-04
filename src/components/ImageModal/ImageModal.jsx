import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div onClick={onClose}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}
