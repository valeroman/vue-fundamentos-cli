import Counter from '@/components/Counter';
import { shallowMount } from '@vue/test-utils';

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('Debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe de tener el valor por defecto "Counter"', () => {

        // const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p ', () => {

        // wrapper
        // const wrapper = shallowMount(Counter)

        // buscar todos los pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()

        // expect segundo p === 100
        // expect(pTags[1].text()).toBe('100')
        expect(value).toBe('100')
    })

    test('debe de incrementar y decrementar el contador', async() => {

        // const wrapper = shallowMount(Counter)

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')

    })

    test('debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)

        // console.log('==> ', typeof start)
    })

    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo!!'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

        // console.log(wrapper.html())
    })





})