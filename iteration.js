var preorderTraversal = function(root) {
    if (root === null) return []
    const result = [];
    const stack = [];
    stack.push(root)
    while(stack.length > 0) {
        const node = stack.pop()
        result.push(node.val)
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return result
};

var inorderTraversal = function(root) {
    const result = []
    const stack = []
    let current = root
    while(stack.length|| current) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val)
        current = current.right
    }
    return result
};

