<?php

class ProductfieldCategory extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $productfieldCategory_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("productfield-category");
        $this->hasMany('productfield-category_id', 'Productfield', 'primary_productfieldcategory_id', ['alias' => 'Productfield']);
        $this->hasMany('productfield-category_id', 'Productfield', 'secondary_productfieldcategory_id', ['alias' => 'Productfield']);
        $this->hasMany('productfield-category_id', 'Productfield', 'tertiary_productfieldcategory_id', ['alias' => 'Productfield']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productfield-category';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfieldCategory[]|ProductfieldCategory|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfieldCategory|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
