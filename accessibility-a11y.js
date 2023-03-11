/**
 * @Reference
 * Rob Dodson's a11y casts - https://youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g
 * Quick Reference - https://medium.com/@realabhijeet4u/9-tips-to-get-bare-minimum-of-web-accessibility-739899a9437c
 */

/**
 * @Accessibility_Tree
    - On page load, apart from framing DOM object, the browser will also frame Accessibility Tree which will be handed over to assistive tools like screen-readers.
    - Accessibility tree will look mostly like DOM tree. Each node in the accessibility tree will have few pre-defined properties based on the element's sematics.
    - For example: 
            button - { Role: 'button', Name:'Submit', labelledBy:"" } 
            input(type='input') - { Role:'input', Name:''}
            select - { Role:'combobox', Name:'City', selected:'Tirupati', collapsed: true } 
            input(type='checkbox') - { Role:'checkbox', Name:'Add Meal', checked: false }

 * @Thinks_to_remember_to_ensure_accessibility
    @Use_Native_Elements - Always try to use native html elements which already have predefined semantics. The native semantic elements will make sure the proper action while using interactive tools.
         Like tabOrder, informing the user about the exact nature of the element they are in and so on
         
         <div class='fancyBtn'>Submit</div>
         <button class='fancyBtn'>Submit</button>

         Let us assume fancyBtn is a class which ensure the fancy look to the user for a submit button. The above two lines will provide the same UI to the user but the <div> tag will have
            less accessibilty when compared to the <button> tag. Because the <div> tag doesn't have much semantics attached to it and it is just a grouping element. So when the <div> tag is
            parsed by the screen readers, they will just propmt "Group Submit". Clearly, the user doesn't have what action they need to perfome here. On the other hand, the prompt for <button>
            will be "button Submit". So, the user know he has to click on it to take an action.

    @Ensure_Tab_Order
    @FontSize_Color_And_ColorContrast
    @For_Custom_Elements_Always_Follow_WCAG - For custom elements define the ARIA attributes following Web Content Accessibility Guide(WCAG)
    @Use_Axe_Chrome_Extension - To identify the vulnerabilities
 */
