const elementutil = require("../util/elementUtil");

class CarSafety{

    //element locators
    get cookies() {return $('//button[@title="Accept"]')}
    get cars() {return $('//span[text()="Cars"]')}
    get electric() {return $('//h2[text()="Electric"]')}
    get hybrids() {return $('//h2[text()="Hybrids"]')}
    get mildHybrids() {return $('//h2[text()="Mild hybrids"]')}
    get pureElectric() {return $('//p[text()="Pure electric"]')}
    get plugInHybrids() {return $('//p[text()="Plug-in hybrids"]')}
    get mildHybridsMicroHybrids() {return $('//p[text()="Mild hybrids | Micro hybrids"]')}
    get close() {return $('//span[text()="Close"]')}
    get siteNavigationIcon() {return $('(//div[@class="_SiteNav-a"])[10]')}
    get buy() {return $('//em[text()="Buy"]')}
    get own() {return $('//em[text()="Own"]')}
    get whyVolvo() {return $('//em[text()="Why Volvo"]')}
    get explore() {return $('//em[text()="Explore"]')}
    get more() {return $('//em[text()="More"]')}
    get international() {return $('//p[text()="International"]')}

    //actions
    isCarsSpanExist() {return elementutil.doIsDisplayed(this.cars)}
    iselectricHeadingExist() {return elementutil.doIsDisplayed(this.electric)}
    ishybridsHeadingExist() {return elementutil.doIsDisplayed(this.hybrids)}
    ismildHybridsHeadingExist() {return elementutil.doIsDisplayed(this.mildHybrids)}
    ispureElectricDescriptionExist() {return elementutil.doIsDisplayed(this.pureElectric)}
    isplugInHybridsDescriptionExist() {return elementutil.doIsDisplayed(this.plugInHybrids)}
    ismildHybridsMicroHybridsDescriptionExist() {return elementutil.doIsDisplayed(this.mildHybridsMicroHybrids)}
    iscloseExist() {return elementutil.doIsDisplayed(this.close)}
    issiteNavigationIconExist() {return elementutil.doIsDisplayed(this.siteNavigationIcon)}
    isbuyOptionExist() {return elementutil.doIsDisplayed(this.buy)}
    isownOptionExist() {return elementutil.doIsDisplayed(this.own)}
    iswhyVolvoOptionExist() {return elementutil.doIsDisplayed(this.whyVolvo)}
    isexploreOptionExist() {return elementutil.doIsDisplayed(this.explore)}
    ismoreOptionExist() {return elementutil.doIsDisplayed(this.more)}
    isinternationalOptionExist() {return elementutil.doIsDisplayed(this.international)}

    AcceptCookies(){
        elementutil.doClick(this.cookies)
    }

    clickCars(){
        elementutil.doClick(this.cars)
    }

    clickClose(){
        elementutil.doClick(this.close)
    }

    clicksiteNavigationIcon(){
        elementutil.doClick(this.siteNavigationIcon)
    }

}
module.exports = new CarSafety();