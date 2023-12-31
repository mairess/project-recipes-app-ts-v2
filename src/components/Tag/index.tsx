import { TheTag } from './style';

type TagProps = {
  theTags: string[],
  index: number,
};

function Tag({ theTags, index }: TagProps) {
  if (theTags?.length === 0) {
    return (
      <TheTag>
        <p>No tags</p>
      </TheTag>
    );
  }

  return (
    theTags?.slice(0, 2).map((tag) => (
      <TheTag
        key={ tag }
      >
        <p
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </p>
      </TheTag>
    ))
  );
}

export default Tag;
