const isValidBST = function(root) {
    function validNode(node, min, max){
         if (!node){
             return true
         }
        
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)){
            return false
        }
        
        return validNode(node.left, min, node.val) && validNode(node.right, node.val, max)
    }

    return validNode(root, null, null)
};
