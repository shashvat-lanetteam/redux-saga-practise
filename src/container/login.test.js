import React from 'react';
import Enzyme,{mount} from 'enzyme';
import {Login} from './Login';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props={
    authentication:{isLoading:false}
};
describe('login component',()=>{
    let component,inst;
    beforeEach(()=>{
        component=mount(<Login {...props} />);
        inst=component.instance();
    });
   it('alert method',()=>{
        const alertBtn=component.find('#alertBtn');
        expect(alertBtn.length).toBe(1);
        alertBtn.simulate('click');
   });
});