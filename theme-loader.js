module.exports = function (content) {
    let mutated = '';
    console.log(`------Original content--------`);
    console.log(content);
    mutated = content.replace(/([^\n^\r]+)((\.theme-\w+\s)|(\.apply-theme\.theme-\w+\s))/g, '$2$1');
    // mutated = mutated.replace(/([^\n^\r]+)(\.theme-\w+\s)/g, '$1');
    console.log(`------Changed content--------`);
    console.log(mutated);
    return content;
};
