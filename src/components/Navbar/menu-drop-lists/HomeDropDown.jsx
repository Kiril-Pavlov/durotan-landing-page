import React from 'react'

import brandNameLogo from "../../../assets/brand-name-logo.png"
import clothingLogo from "../../../assets/clothing-logo.png"
import gapLogo from "../../../assets/gap-logo.png"
import masoreLogo from "../../../assets/masore-logo.png"

const HomeDropDown = () => {
    return (
        <div>
            <div>
                <h3>STYLES</h3>
                <ul>
                    <li>Default</li>
                    <li>Full Width</li>
                    <li>Modern</li>
                    <li>Collections</li>
                    <li>Dark Skin</li>
                    <li>Classic</li>
                    <li>Best Selling</li>
                    <li>Sidebar</li>
                    <li>Minimal</li>
                    <li>Shopable</li>
                </ul>
            </div>
            <div>
                <h3>TOPIC</h3>
                <ul>
                    <li>Default</li>
                    <li>Full Width</li>
                    <li>Modern</li>
                    <li>Collections</li>
                    <li>Dark Skin</li>
                    <li>Classic</li>
                    <li>Best Selling</li>
                    <li>Sidebar</li>
                    <li>Minimal</li>
                    <li>Shopable</li>
                </ul>
            </div>
            <div>
                <h3>BRANDS</h3>
                <div>
                    <img src={brandNameLogo} alt="Brand Name" />
                    <img src={clothingLogo} alt="Clothing" />
                    <img src={gapLogo} alt="GAP" />
                    <img src={masoreLogo} alt="Masore" />
                </div>
            </div>
        </div>
    )
}

export default HomeDropDown