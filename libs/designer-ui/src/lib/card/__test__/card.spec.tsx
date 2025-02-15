import type { CardProps } from '../index';
import { Card } from '../index';
import renderer from 'react-test-renderer';

describe('lib/card', () => {
  let minimal: CardProps;

  beforeEach(() => {
    minimal = {
      brandColor: '#474747',
      drag: () => null,
      dragPreview: () => null,
      draggable: false,
      id: 'id',
      title: 'title',
      isSecureInputsOutputs: false,
      runData: undefined,
    };
  });

  it('should render', () => {
    const tree = renderer.create(<Card {...minimal} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as inactive', () => {
    const tree = renderer.create(<Card {...minimal} active={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as cloned', () => {
    const tree = renderer.create(<Card {...minimal} cloned={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as draggable', () => {
    const tree = renderer.create(<Card {...minimal} draggable={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render as selected', () => {
    const tree = renderer.create(<Card {...minimal} selected={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    const tree = renderer
      .create(<Card {...minimal} icon="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
