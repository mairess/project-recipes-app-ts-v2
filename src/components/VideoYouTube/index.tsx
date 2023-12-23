import YouTube from 'react-youtube';
import { DrinkType, MealType } from '../../types';
import { Title } from './style';

type VideoYouTubeProps = {
  recipe: MealType[] | DrinkType[];
};

type RecipeType = {
  strYoutube: string;
};

function VideoYouTube({ recipe }: VideoYouTubeProps) {
  const [data] = recipe;
  if (!data) {
    return null;
  }
  const { strYoutube } = data as RecipeType;
  const VideoId = strYoutube.split('v=')[1];

  const opts = {
    width: '336',
    height: '205.09104',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Title>Video</Title>
      <div data-testid="video">
        <YouTube
          videoId={ VideoId }
          opts={ opts }
        />
      </div>
    </>
  );
}

export default VideoYouTube;
