const React = require('react');
const { mount } = require('enzyme');
const Embed = require('../../src/block-types/Embed');


describe('Embed', () => {
  test('Embed will have src property if iframe is true', () => {
    const block = { type: 'embed',
      data: { html: false,
        url: 'http://jsbin.com/fewilipowi/edit?js,output',
        title: 'JS Bin',
        favicon: 'http://static.jsbin.com/images/favicon.png',
        image: 'http://static.jsbin.com/images/logo.png',
        iframe: true,
        width: '100%',
        height: '300px' },
      sidebar: undefined };
    const embedInput = mount(<Embed block={block} />);
    expect(embedInput.find('iframe').prop('src')).toBe('http://jsbin.com/fewilipowi/edit?js,output');
  });

  // test('Embed will have src property if iframe is true', () => {
  //   const block = { type: 'embed',
  //     data: {
  //       favicon: 'https://s.ytimg.com/yts/img/ringo/img/favicon-vfl8qSV2F.ico',
  //       html: '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FjYjDqzZ4gjY%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjYjDqzZ4gjY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjYjDqzZ4gjY%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen></iframe>',
  //       image: 'https://i.ytimg.com/vi/jYjDqzZ4gjY/hqdefault.jpg',
  //       sidebar: true,
  //       title: 'White kids Watch me whip school Chorus - chorus white kids singing Watch me whip',
  //       url: 'https://www.youtube.com/watch?v=jYjDqzZ4gjY' },
  //     sidebar: true };
  //   const embedInput = mount(<Embed block={block} />);
  //
  //   expect(embedInput.find('span').text()).toBe('<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FjYjDqzZ4gjY%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjYjDqzZ4gjY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjYjDqzZ4gjY%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen></iframe>');
  // });
});
