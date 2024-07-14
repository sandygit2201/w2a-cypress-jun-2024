describe('check data with regex',()=>{

    it('check data with regex',()=>{

        let loginMessage = "welcome to userx"

        expect(loginMessage).to.match(/^welcome to/)

    })

})