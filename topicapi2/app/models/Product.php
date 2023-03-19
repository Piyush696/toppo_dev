<?php

class Product extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $product_id;

    /**
     *
     * @var string
     */
    public $productfield_id;

    /**
     *
     * @var string
     */
    public $datatype_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("product");
        $this->hasMany('product_id', 'ProductProductfeature', 'product_id', ['alias' => 'ProductProductfeature']);
        $this->hasMany('product_id', 'ProductTag', 'product_id', ['alias' => 'ProductTag']);
        $this->hasMany('product_id', 'Productattribute', 'product_id', ['alias' => 'Productattribute']);
        $this->belongsTo('datatype_id', 'Datatype', 'datatype_id', ['alias' => 'Datatype']);
        $this->belongsTo('productfield_id', 'Productfield', 'productfield_id', ['alias' => 'Productfield']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'product';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Product[]|Product|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Product|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
