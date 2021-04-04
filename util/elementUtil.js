class ElementUtil{

    doClick(element){
       element.waitForDisplayed()
       element.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doIsSelected(element){
        element.waitForDisplayed()
        return element.isSelected()
    }

    doIsEnabled(element){
        element.waitForDisplayed()
        return element.isEnabled()
    }

    doIsClickable(element){
        element.waitForDisplayed()
        return element.isClickable()
    }

    doIsExisting(element){
        return element.isExisting()
    }

    doGetPageTitle(){
        return browser.getTitle()
    }

    doGetAttribute(element, attributename){
        return element.getAttribute(attributename)
    }

    doGetText(element){
        return element.getText()
    }

    doGetElementCount(element){
        return element.length
    }

    doClearTextField(element){
        element.clearValue()
    }
}

module.exports = new ElementUtil()