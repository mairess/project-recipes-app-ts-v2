import { TheTag } from './style';

type TagProps = {
  theTags: string[]
};

function Tag({ theTags }: TagProps) {
  console.log(theTags);

  if (theTags.length === 0) {
    return (
      <TheTag>
        <p>No tags</p>
      </TheTag>
    );
  }

  return (
    theTags.slice(0, 2).map((tag) => (
      <TheTag key={ tag }>
        <p>{tag}</p>
      </TheTag>
    ))
  );
}

export default Tag;
