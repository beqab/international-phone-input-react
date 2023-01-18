React Simple Phone Input
==========

A simple and customizable react phone number dropdown component. It can mix up with your designed theme and give a fluent vibe able dropdown area in your next project.



- SSR Friendly
- Customizable
- Search Country
- Smallest Bundle Size (About 500kb)
- Typescript support

## Installation

```shell-script
$ npm i international-phone-input-react --save
```

## Usage

```jsx
import { PhoneInput } from "international-phone-input-react";

<PhoneInput
  phoneNumber={phoneNumber} setPhoneNumber={phoneNumber}
/>
```
#### [See Demo](https://international-phone-input-react.vercel.app/)

## Options
<table width="100%">
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th width="30%"> Description </th>
    <th> Is Required </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> phoneNumber </td>
    <td> string </td>
    <td> controlled field value  </td>
    <td> required </td>
    <td> "569 23 12 123" </td>
  </tr>
   <tr>
    <td> setPhoneNumber </td>
    <td> function </td>
    <td> phone onChange handler </td>
    <td> required </td>
    <td> <code> (e) => { setPhoneNumber(e.target.value)}</code> </td>
  </tr>
  <tr>
    <td> error </td>
    <td> string </td>
    <td> error message </td>
    <td> optional </td>
    <td> </td>
  </tr>
  
  <tr>
    <td> placeholder </td>
    <td> string </td>
    <td> phone fields placeholder </td>
    <td> optional </td>
    <td>enter phone..</td>
  </tr>
  
   <tr>
    <td> searchPlaceholder </td>
    <td> string </td>
    <td> search field placeholder </td>
    <td> optional </td>
    <td> Search...</td>
  </tr>

  <tr>
    <td> defaultCountry </td>
    <td> string </td>
    <td> default country code  </td>
    <td> optional </td>
    <td> "US" </td>
  </tr>
  
  <tr>
    <td> except </td>
    <td> array </td>
    <td> If you want to remove some country to the list.</td>
    <td> optional </td>
    <td> ["AF", "AL"] </td>
  </tr>
  
  <tr>
    <td> only </td>
    <td> array </td>
    <td> only specific countries</td>
    <td> optional </td>
    <td> ["BD", "US", "GE"] </td>
  </tr>

  <tr>
    <td> animatedPlaceholder </td>
    <td> boolean </td>
    <td> disable/enable placeholder animation </td>
    <td>optional</td>
    <td></td>
  </tr>

</table>

## Event

<!-- <table>
  <tr>
    <th> Event Name </th>
    <th> Description </th>
    <th> Example </th>
  </tr>
  <tr>
    <td> onChange </td>
    <td> To get the value from component. You get following field
        <ul>
            <li><code>country</code></li>
            <li><code>code</code></li>
            <li><code>dialCode</code></li>
            <li><code>value</code></li>
            <li><code>valueWithoutPlus</code></li>
         </ul>
    </td>
    <td> <code>onChange={(data: PhoneInputResponseType) => console.log(data)}</code> </td>
  </tr>
</table> -->

<!-- ## ClassName -->

<!-- <table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerClass </td>
    <td> string </td>
    <td> class name for container </td>
  </tr>
  <tr>
    <td> buttonClass </td>
    <td> string </td>
    <td> class name for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownClass </td>
    <td> string </td>
    <td> class name for dropdown area/menu </td>
  </tr>
  <tr>
    <td> dropdownListClass </td>
    <td> string </td>
    <td> class name for dropdown list </td>
  </tr>
  <tr>
    <td> dropdownIconClass </td>
    <td> string </td>
    <td> class name for dropdown icon </td>
  </tr><tr>
    <td> searchContainerClass </td>
    <td> string </td>
    <td> class name for search bar container </td>
  </tr>
  <tr>
    <td> searchInputClass </td>
    <td> string </td>
    <td> class name for search input field </td>
  </tr>
  <tr>
    <td> searchIconClass </td>
    <td> string </td>
    <td> class name for search icon </td>
  </tr>
  <tr>
    <td> inputClass </td>
    <td> string </td>
    <td> class name for search icon </td>
  </tr>
</table> -->

<!-- ## Customize styles -->
<!-- 
<table>
  <tr>
    <th> Name </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerStyle </td>
    <td> phone Input Container style </td>
  </tr>
  <tr>
    <td> buttonStyle </td>
    <td> style for dropdown button </td>
  </tr>
  <tr>
    <td> dropdownStyle </td>
    <td> style for dropdown menu/area </td>
  </tr>
  <tr>
    <td> dropdownListStyle </td>
    <td> style for dropdown list </td>
  </tr>
  <tr>
    <td> dropdownIconStyle </td>
    <td> style for dropdown icon </td>
  </tr>
  <tr>
    <td> searchContainerStyle </td>
    <td> search container style </td>
  </tr>
  <tr>
    <td> searchInputStyle </td>
    <td> search input field style </td>
  </tr>
  <tr>
    <td> searchIconStyle </td>
    <td> search icon style </td>
  </tr>
  <tr>
    <td> inputStyle </td>
    <td> input field style </td>
  </tr>
</table> -->

<!-- `note:` version 5 released. see the [changelogs](https://github.com/siamahnaf198/international-phone-input-react/releases/tag/v5.0.0) -->

## Contributing
- Code style changes not allowed
- Do not create issues about incorrect or missing country data

## Issues or correction
If you face any issues, missing data or wrong data about country, you are welcome to create an issue.

## Stay in touch

- Author - [beka badagadze]
- Github - [https://github.com/beqab](https://github.com/beqab)
