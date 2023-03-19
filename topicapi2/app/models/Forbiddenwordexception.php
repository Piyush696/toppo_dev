<?php
namespace App\Models;
class Forbiddenwordexception extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $forbiddenwordexception_id;

    /**
     *
     * @var string
     */
    public $exception;

    /**
     *
     * @var string
     */
    public $isPhrase;

    /**
     *
     * @var string
     */
    public $isCaseSensitive;

    /**
     *
     * @var string
     */
    public $notes;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("forbiddenwordexception");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'forbiddenwordexception';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Forbiddenwordexception[]|Forbiddenwordexception|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Forbiddenwordexception|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
