/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
var expect = require('expect');
var React = require('react/addons');

var ImageButton = require('../ImageButton');

describe('ImageButton', () => {
    afterEach((done) => {
        React.unmountComponentAtNode(document.body);
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('create a empty button', () => {
        const btn = React.render(<ImageButton/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        expect(btnDiv.style.cursor).toBe("pointer");
        expect(btnDiv.style.margin).toBe("0px");
        expect(btnDiv.style.padding).toBe("0px");
        expect(btnDiv.style.display).toBe("inline-block");

        expect(btnDiv.style.height).toBe("48px");
        expect(btnDiv.style.width).toBe("48px");
        expect(btnDiv.style.border).toBe("1px solid grey");
        expect(btnDiv.style.borderRadius).toBe("4px");
        expect(btnDiv.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });

    it('creates an empty button with a custom style', () => {
        const btn = React.render(<ImageButton
            style={{margin: "4px", border: "1px solid black"}}/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        expect(btnDiv.style.cursor).toBe("pointer");
        expect(btnDiv.style.margin).toBe("4px");
        expect(btnDiv.style.padding).toBe("0px");
        expect(btnDiv.style.display).toBe("inline-block");

        expect(btnDiv.style.height).toBe("48px");
        expect(btnDiv.style.width).toBe("48px");
        expect(btnDiv.style.border).toBe("1px solid black");
        expect(btnDiv.style.borderRadius).toBe("4px");
        expect(btnDiv.style.backgroundColor).toBe("rgb(250, 250, 250)");
    });

    it('create a button with image', () => {
        const btn = React.render(<ImageButton image="fake"/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        expect(btnDiv.style.cursor).toBe("pointer");
        expect(btnDiv.style.margin).toBe("0px");
        expect(btnDiv.style.padding).toBe("0px");
        expect(btnDiv.style.display).toBe("inline-block");

        expect(btnDiv.style.overflow).toBe("hidden");
    });

    it('checks the click event', () => {
        const handlers = {
            onclick() {}
        };
        let spy = expect.spyOn(handlers, "onclick");
        const btn = React.render(<ImageButton onClick={handlers.onclick}/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        btnDiv.click();
        expect(spy.calls.length).toBe(1);
    });

    it('creates a disabled button with default properties', () => {
        const handlers = {
            onclick() {}
        };
        let spy = expect.spyOn(handlers, "onclick");
        const btn = React.render(<ImageButton disabled={true} onClick={handlers.onclick}/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        expect(btnDiv.style.cursor).toBe("not-allowed");
        btnDiv.click();
        expect(spy.calls.length).toBe(0);
    });

    it('creates a disabled button with a custom style', () => {
        const handlers = {
            onclick() {}
        };
        let spy = expect.spyOn(handlers, "onclick");
        const btn = React.render(<ImageButton disabled={true} onClick={handlers.onclick}
            style={{cursor: "none"}}/>, document.body);
        expect(btn).toExist();

        const btnDiv = React.findDOMNode(btn);
        expect(btnDiv.style.cursor).toBe("none");
        btnDiv.click();
        expect(spy.calls.length).toBe(0);
    });
});
