import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard image={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}
