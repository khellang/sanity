import {storiesOf} from 'part:@sanity/storybook'
import {withKnobs} from 'part:@sanity/storybook/addons/knobs'
import {DefaultStory} from './stories/default'

storiesOf('@sanity/components/labels', module).addDecorator(withKnobs).add('Default', DefaultStory)
