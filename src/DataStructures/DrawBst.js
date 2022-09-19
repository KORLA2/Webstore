import { BinaryTreeNode } from "binary-tree-visualizer";
import React from "react";

class BinarySearchTreeNode extends BinaryTreeNode {
  insert(value) {
    if (Number(this.value) >Number( value)) {
   
   if(this.left){
        this.left.insert(value);
      return;
   }
   this.setLeft(new BinarySearchTreeNode(value));
return;
    }

if(this.right){
    this.right.insert(value)
    return;
}
this.setRight(new BinarySearchTreeNode(value));
return;
  }
}

export default BinarySearchTreeNode;
