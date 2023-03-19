<?php

class ProductfeatureTag extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $productfeature_tag_id;

    /**
     *
     * @var integer
     */
    public $productfeature_id;

    /**
     *
     * @var string
     */
    public $tag_id;

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
        $this->setSource("productfeature_tag");
        $this->belongsTo('productfeature_id', 'Productfeature', 'productfeature_id', ['alias' => 'Productfeature']);
        $this->belongsTo('tag_id', 'Tag', 'tag_id', ['alias' => 'Tag']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productfeature_tag';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfeatureTag[]|ProductfeatureTag|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return ProductfeatureTag|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
