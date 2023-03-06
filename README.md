# drop-down-module
module to create re-usable drop-down menus.

# installation 

* -- npm install [tba]
* Add the following css to your styles: 
``` 
.dropdown-parent {
  position: relative;
}

.dropdown-child {
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 0;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.2s ease-in-out;
}

.dropdown-parent.open .dropdown-child {
  opacity: 1;
  pointer-events: auto;
}
```
* Assign dropdown-parent to desired parent elements and dropdown-child to corresponding child container (the dropdown menu).
* Can use pre-existing class names provided you add the appropriate properties and feed in the correct parameters to the createDropdown function.


# Usage
* Import:

```import createDropdown from 'drop-down-module';```

* Function arguments:

``` 
function createDropdown(eventType = 'click', parentSelector='.dropdown-parent', childSelector='.dropdown-child')
```

* First argument accepts optional parameter 'hover', to change dropdown behaviour to hover.
* Provide additional arguments if using custom class names.
