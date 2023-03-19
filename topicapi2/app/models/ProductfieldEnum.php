<?php

class ProductfieldEnum extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $productfieldEnum_id;

    /**
     *
     * @var string
     */
    public $productfield_id;

    /**
     *
     * @var string
     */
    public $id;

    /**
     *
     * @var string
     */
    public $value;

    /**
     *
     * @var string
     */
    public $description;

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
        $this->setSource("productfield-enum");
        $this->belongsTo('productfield_id', 'Productfield', 'productfield_id', ['alias' => 'Productfield']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productfield-enum';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfieldEnum[]|ProductfieldEnum|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfieldEnum|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
