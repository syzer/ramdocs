/**
    @module category
    @author Michael Hurley <mh@buzzdecafe.com>
 */

exports.defineTags = function(dict) {
    /**
     * Support @category source tag. Expected value is a String like: "List"
     */
    dict.defineTag('category', {    
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
          doclet.categories = doclet.categories || [];
          doclet.categories.push(tag.value);
        }
    });

};
