import AppComponent from 'D:/dev/react-webpack-starter-master/src/app/app.component.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

var component;
var spy = sinon.spy();

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {
      component = TestUtils.renderIntoDocument(<AppComponent onRender={ spy } />);
    });
    it('should not be undefined?', () => {
      expect(component).not.to.be.undefined;
    });
  });
});



// import ReactTestUtils from 'react-addons-test-utils' // ES6


// describe('AppComponent', () => {
//   it('should render AweSomeComponent', () => {

//     const renderer = ReactTestUtils.createRenderer();
//     renderer.render(<AweSomeComponent />);
//     const result = renderer.getRenderOutput();

//     expect(result.type).toBe('div');
//     expect(result.props.children).toEqual([
//       <span className="heading">Title</span>,
//       <Subcomponent foo="bar" />
//     ]);

//   });
// });